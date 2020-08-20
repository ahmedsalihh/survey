package com.ahmedsalihh.survey.service;

import com.ahmedsalihh.survey.model.Survey;
import com.ahmedsalihh.survey.repository.SurveyRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class SurveyServiceTest {

    @Autowired
    private SurveyService surveyService;

    @MockBean
    private SurveyRepository surveyRepository;

    @Test
    void saveSurveySuccess() {
        Survey survey = new Survey();
        survey.setTopic("test");
        survey.setQuestion("test question");

        Survey expected = new Survey(1l, "test", "test question", 0);

        Mockito.doReturn(expected).when(surveyRepository).save(survey);

        Survey response = surveyService.save(survey);
        assertEquals(response.getId(), expected.getId());
    }

    @Test
    void findSurveyByIdSuccess() {
        Survey expected = new Survey(1l, "test", "test question", 0);
        Mockito.doReturn(Optional.of(expected)).when(surveyRepository).findById(expected.getId());

        Optional<Survey> response = surveyService.findById(expected.getId());
        assertEquals(response.get().getId(), expected.getId());
    }

    @Test
    void findAllSurveysSuccess() {
        List<Survey> surveys = new ArrayList<>();
        Survey survey1 = new Survey(1l, "test 1", "test question 1", 0);
        Survey survey2 = new Survey(2l, "test 2", "test question 2", 0);
        surveys.add(survey1);
        surveys.add(survey2);

        Mockito.doReturn(surveys).when(surveyRepository).findAll();

        List<Survey> response = surveyService.findAll();
        assertEquals(response.size(), surveys.size());
    }
}