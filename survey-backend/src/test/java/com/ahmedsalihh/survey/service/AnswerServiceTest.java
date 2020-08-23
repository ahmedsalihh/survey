package com.ahmedsalihh.survey.service;

import com.ahmedsalihh.survey.model.Answer;
import com.ahmedsalihh.survey.model.Survey;
import com.ahmedsalihh.survey.repository.AnswerRepository;
import com.ahmedsalihh.survey.repository.SurveyRepository;
import org.assertj.core.util.Lists;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class AnswerServiceTest {

    @Autowired
    private AnswerService answerService;

    @MockBean
    private AnswerRepository answerRepository;

    @MockBean
    private SurveyRepository surveyRepository;

    @Test
    void saveSuccess() {
        Survey survey = new Survey(1L, "test 1", "test question 1", 0);

        Answer answer = new Answer();
        answer.setScore(9);
        answer.setFeedback("good");

        Answer expected = new Answer(1L, 9, "good", survey);

        Mockito.doReturn(Optional.of(survey)).when(surveyRepository).findById(1L);
        Mockito.doReturn(1).when(surveyRepository).updateSurveyNpmScore(1L);
        Mockito.doReturn(expected).when(answerRepository).save(answer);

        Answer response = answerService.save(1L, answer);
        assertEquals(response.getId(), expected.getId());
    }

    @Test
    void findBySurveyIdSuccess() {
        Survey survey = new Survey(1L, "test 1", "test question 1", 0);
        Answer answer = new Answer(1L, 9, "good", survey);
        List<Answer> answers = new ArrayList<>();
        answers.add(answer);

        Mockito.doReturn(answers).when(answerRepository).findBySurveyId(survey.getId());

        List<Answer> response = answerService.findBySurveyId(survey.getId());
        assertEquals(response.get(0).getSurvey().getId(), survey.getId());
    }
}