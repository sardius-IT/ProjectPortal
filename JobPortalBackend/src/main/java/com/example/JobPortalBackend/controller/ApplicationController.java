package com.example.JobPortalBackend.controller;

import com.example.JobPortalBackend.model.Application;
import com.example.JobPortalBackend.service.ApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/applications")
@RequiredArgsConstructor
public class ApplicationController {

    private final ApplicationService applicationService;

    @PostMapping
    public ResponseEntity<Application> submitApplication(@RequestBody Application application) {
        Application saved = applicationService.addApplication(application);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/stats/daily")
    public ResponseEntity<List<Map<String, Object>>> getDailyStats() {
        List<Map<String, Object>> stats = applicationService.getDailyApplicationStats();
        return ResponseEntity.ok(stats);
    }
}
