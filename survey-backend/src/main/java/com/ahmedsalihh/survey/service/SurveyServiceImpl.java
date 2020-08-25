package com.ahmedsalihh.survey.service;

import com.ahmedsalihh.survey.exception.BadRequestException;
import com.ahmedsalihh.survey.model.Survey;
import com.ahmedsalihh.survey.repository.SurveyRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SurveyServiceImpl implements SurveyService {
    private SurveyRepository surveyRepository;

    public SurveyServiceImpl(SurveyRepository surveyRepository) {
        this.surveyRepository = surveyRepository;
    }

    @Override
    public Survey save(Survey survey) {
        if (survey.getTopic().equals("") || survey.getQuestion().equals("")) {
            throw new BadRequestException("Topic or Question can't be empty");
        }
        return surveyRepository.save(survey);
    }

    @Override
    public Optional<Survey> findById(Long id) {
        return surveyRepository.findById(id);
    }

    @Override
    public List<Survey> findAll() {
        return surveyRepository.findAll();
    }
}
