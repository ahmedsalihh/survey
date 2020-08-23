package com.ahmedsalihh.survey.controller;

import com.ahmedsalihh.survey.model.Survey;
import com.ahmedsalihh.survey.service.SurveyService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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

    @PostMapping("/surveys")
    public Survey createSurvey(@RequestBody Survey survey) {
        return surveyService.save(survey);
    }
}
