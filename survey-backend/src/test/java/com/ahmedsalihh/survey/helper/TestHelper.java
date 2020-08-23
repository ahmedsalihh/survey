package com.ahmedsalihh.survey.helper;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;

public class TestHelper {
    public static String convertToJson(Object data) {
        ObjectMapper obj = new ObjectMapper();
        String json = "";
        try {
            json = obj.writeValueAsString(data);
            return json;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
}
