package com.ahmedsalihh.survey.service;

import com.ahmedsalihh.survey.exception.ResourceNotFoundException;
import com.ahmedsalihh.survey.model.Answer;
import com.ahmedsalihh.survey.repository.AnswerRepository;
import com.ahmedsalihh.survey.repository.SurveyRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class AnswerServiceImpl implements AnswerService {

    private AnswerRepository answerRepository;
    private SurveyRepository surveyRepository;

    public AnswerServiceImpl(AnswerRepository answerRepository, SurveyRepository surveyRepository) {
        this.answerRepository = answerRepository;
        this.surveyRepository = surveyRepository;
    }

    @Override
    @Transactional
    public Answer save(Long surveyId, Answer answer) {

        return surveyRepository.findById(surveyId).map(survey -> {
            answer.setSurvey(survey);
            Answer saveResponse = answerRepository.save(answer);
            int updatedRow = surveyRepository.updateSurveyNpmScore(surveyId);
            if (updatedRow != 1) {
                new Exception("Couldn't updated score");
            }
            return saveResponse;
        }).orElseThrow(() -> new ResourceNotFoundException("SurveyId " + surveyId + " not found"));
    }

    @Override
    public List<Answer> findBySurveyId(Long id) {
        return answerRepository.findBySurveyId(id);
    }
}
