package com.western.sa.team1.skiresort;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableEurekaClient
@RestController
public class SkiResortApplication {

    public static void main(String[] args) {
        SpringApplication.run(SkiResortApplication.class, args);
    }

    @RequestMapping("/test")
    public String welcome(){
        return "hotel service active";
    }
}

