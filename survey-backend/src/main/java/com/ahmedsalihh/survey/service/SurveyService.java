package com.ahmedsalihh.survey.service;

import com.ahmedsalihh.survey.model.Survey;

import java.util.List;
import java.util.Optional;

public interface SurveyService {
    Survey save(Survey survey);

    Optional<Survey> findById(Long id);

    List<Survey> findAll();
}
