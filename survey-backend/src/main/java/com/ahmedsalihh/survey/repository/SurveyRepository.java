package com.ahmedsalihh.survey.repository;

import com.ahmedsalihh.survey.model.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface SurveyRepository extends JpaRepository<Survey, Long> {
    @Modifying
    @Transactional
    @Query(value = "UPDATE survey s,\n" +
            "    (SELECT \n" +
            "        a.survey_id AS 'survey_id',\n" +
            "            COUNT(CASE\n" +
            "                WHEN a.score >= 9 THEN 1\n" +
            "                ELSE NULL\n" +
            "            END) AS 'promoters',\n" +
            "            COUNT(CASE\n" +
            "                WHEN a.score <= 6 THEN 1\n" +
            "                ELSE NULL\n" +
            "            END) AS 'detractors'\n" +
            "    FROM\n" +
            "        answer a\n" +
            "    GROUP BY a.survey_id) AS t \n" +
            "SET \n" +
            "    s.npm_score = (t.promoters * 100 / (t.promoters + t.detractors) - t.detractors * 100 / (t.promoters + t.detractors))\n" +
            "WHERE\n" +
            "    s.id = :id", nativeQuery = true)
    int updateSurveyNpmScore(@Param("id") Long id);
}
