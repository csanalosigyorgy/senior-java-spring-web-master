package hu.ponte.hr.repository;

import hu.ponte.hr.domain.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {

    @Query("select i.url from Image i where i.id = :id")
    String findUrlById(Long id);
}
