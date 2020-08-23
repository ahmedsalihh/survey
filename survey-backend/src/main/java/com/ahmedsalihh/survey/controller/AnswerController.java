package com.ahmedsalihh.survey.controller;

import com.ahmedsalihh.survey.model.Answer;
import com.ahmedsalihh.survey.service.AnswerService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class AnswerController {
    private AnswerService answerService;

    public AnswerController(AnswerService answerService) {
        this.answerService = answerService;
    }

    @GetMapping("/answers/{surveyId}")
    public List<Answer> getAllAnswersBySurveyId(@PathVariable(value = "surveyId") Long surveyId) {
        return answerService.findBySurveyId(surveyId);
    }

    @PostMapping("/answers/{surveyId}")
    public Answer createAnswer(@PathVariable(value = "surveyId") Long surveyId,
                               @Valid @RequestBody Answer answer) {
        return answerService.save(surveyId, answer);
    }
}
