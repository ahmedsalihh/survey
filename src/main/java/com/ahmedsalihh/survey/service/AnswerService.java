package com.ahmedsalihh.survey.service;

import com.ahmedsalihh.survey.model.Answer;

import java.util.List;

public interface AnswerService {
    Answer save(Long surveyId, Answer answer);

    List<Answer> findBySurveyId(Long id);
}
