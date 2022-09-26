package hu.ponte.hr.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.security.*;
import java.security.spec.PKCS8EncodedKeySpec;
import java.util.Base64;
import java.util.Objects;

@Service
public class SignService {

    @Value("${signature.algorithm}")
    private String algorithm;

    @Value("${signature.path.private_key}")
    private String privateKeyPath;

    @Value("${signature.key_type}")
    private String keyType;

    public String sign(MultipartFile file) {
        try {
            Signature signature = Signature.getInstance(algorithm);
            PrivateKey privateKey = getPrivateKey(privateKeyPath);
            signature.initSign(privateKey);
            signature.update(file.getBytes());
            byte[] signedFile = signature.sign();
            return encodeFile(signedFile);
        } catch (NoSuchAlgorithmException | InvalidKeyException | SignatureException | IOException e) {
            throw new RuntimeException(e);
        }
    }

    private PrivateKey getPrivateKey(String filename) {
        try(InputStream resourceAsStream = getClass().getClassLoader().getResourceAsStream(filename)) {
            if(Objects.isNull(resourceAsStream)) {
                throw new RuntimeException("exception.path");
            }
            byte[] keyBytes = resourceAsStream.readAllBytes();
            PKCS8EncodedKeySpec spec = new PKCS8EncodedKeySpec(keyBytes);
            KeyFactory kf = KeyFactory.getInstance(keyType);
            return kf.generatePrivate(spec);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private String encodeFile(byte[] signedFile) {
        return Base64.getEncoder().encodeToString(signedFile);
    }
}
