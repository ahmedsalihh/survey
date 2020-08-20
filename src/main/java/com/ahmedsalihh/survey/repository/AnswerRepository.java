package com.ahmedsalihh.survey.repository;

import com.ahmedsalihh.survey.model.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {
    List<Answer> findBySurveyId(Long surveyId);
}
