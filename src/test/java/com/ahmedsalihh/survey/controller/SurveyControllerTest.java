package com.ahmedsalihh.survey.controller;

import com.ahmedsalihh.survey.helper.TestHelper;
import com.ahmedsalihh.survey.model.Survey;
import com.ahmedsalihh.survey.service.SurveyService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
class SurveyControllerTest {

    @Autowired
    private SurveyController surveyController;

    @MockBean
    private SurveyService surveyService;

    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        this.mockMvc = MockMvcBuilders.standaloneSetup(surveyController).build();
    }

    @Test
    void getSurveyList() throws Exception {
        List<Survey> surveys = new ArrayList<>();
        Survey survey1 = new Survey(1l, "test 1", "test question 1", 0);
        Survey survey2 = new Survey(2l, "test 2", "test question 2", 0);
        surveys.add(survey1);
        surveys.add(survey2);

        Mockito.doReturn(surveys).when(surveyService).findAll();

        mockMvc.perform(get("/surveys").contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)));
    }

    @Test
    void createSurvey() throws Exception {
        Survey survey = new Survey();
        survey.setTopic("test");
        survey.setQuestion("test question");

        Survey responseSurvey = new Survey(1l, "test", "test question", 0);

        Mockito.doReturn(responseSurvey).when(surveyService).save(survey);

        String json = TestHelper.convertToJson(survey);

        mockMvc.perform(post("/surveys").contentType(MediaType.APPLICATION_JSON).content(json))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("id", is(1)));
    }
}