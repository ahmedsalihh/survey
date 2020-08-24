package com.ahmedsalihh.survey.controller;

import com.ahmedsalihh.survey.model.Survey;
import com.ahmedsalihh.survey.service.SurveyService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class SurveyController {
    private SurveyService surveyService;

    public SurveyController(SurveyService surveyService) {
        this.surveyService = surveyService;
    }

    @GetMapping("/surveys")
    public List<Survey> getSurveyList() {
        return surveyService.findAll();
    }

    @GetMapping("/surveys/{surveyId}")
    public Optional<Survey> getSurveyList(@PathVariable("surveyId") Long surveyId) {
        return surveyService.findById(surveyId);
    }

    @PostMapping("/surveys")
    public Survey createSurvey(@RequestBody Survey survey) {
        return surveyService.save(survey);
    }
}
