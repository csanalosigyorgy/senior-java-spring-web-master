package hu.ponte.hr.controller;


import hu.ponte.hr.services.ImageStore;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.Collections;
import java.util.List;

@RestController()
@RequestMapping("api/images")
@RequiredArgsConstructor
public class ImagesController {

    private final ImageStore imageStore;

    @GetMapping("meta")
    public List<ImageMeta> listImages() {
		return imageStore.getAll();
    }

    @GetMapping("preview/{id}")
    public void getImage(@PathVariable("id") String id, HttpServletResponse response) {
	}

}
