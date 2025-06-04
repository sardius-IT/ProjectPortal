package com.example.JobPortalBackend.controller;

import com.example.JobPortalBackend.model.Job;
import com.example.JobPortalBackend.service.JobService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/jobs")
@RequiredArgsConstructor
public class JobController {

    private final JobService jobService;

    @PostMapping
    public ResponseEntity<String> postJob(@RequestBody Job job) {
        jobService.postJob(job);
        return ResponseEntity.ok("Job posted successfully.");
    }
}
