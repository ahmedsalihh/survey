package com.ahmedsalihh.survey.controller;

import com.ahmedsalihh.survey.helper.TestHelper;
import com.ahmedsalihh.survey.model.Answer;
import com.ahmedsalihh.survey.model.Survey;
import com.ahmedsalihh.survey.service.AnswerService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
class AnswerControllerTest {

    @Autowired
    private AnswerController answerController;

    @MockBean
    private AnswerService answerService;

    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        this.mockMvc = MockMvcBuilders.standaloneSetup(answerController).build();
    }

    @Test
    void getAllAnswersBySurveyIdSuccess() throws Exception {
        List<Answer> answers = new ArrayList<>();
        Survey survey = new Survey(1L, "test 1", "test question 1", 0);
        Answer answer1 = new Answer(1L, 9, "good", survey);
        Answer answer2 = new Answer(1L, 9, "good", survey);

        answers.add(answer1);
        answers.add(answer2);

        Mockito.doReturn(answers).when(answerService).findBySurveyId(survey.getId());

        mockMvc.perform(get("/answers/1").contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)));
    }

    @Test
    void createAnswerSuccess() throws Exception {
        Survey survey = new Survey(1L, "test 1", "test question 1", 0);

        Answer answer = new Answer();
        answer.setScore(9);
        answer.setFeedback("good");

        Answer answerResponse = new Answer(1L, 9, "good", survey);

        Mockito.doReturn(answerResponse).when(answerService).save(survey.getId(), answer);

        String json = TestHelper.convertToJson(answer);

        mockMvc.perform(post("/answers/1").contentType(MediaType.APPLICATION_JSON).content(json))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("id", is(1)));
    }
}