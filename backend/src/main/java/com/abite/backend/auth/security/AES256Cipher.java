package com.abite.backend.auth.security;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;

public class AES256Cipher {
    private static final String SECRET_KEY = "EY0vQKvmAWsEiZ2xcW9ySzGXJDOLmyzj";
    private static final String IV = SECRET_KEY.substring(0, 16); // 16바이트 IV
    private static final SecretKeySpec SECURE_KEY = new SecretKeySpec(SECRET_KEY.getBytes(), "AES");

    public static String encrypt(String str) throws Exception {
        Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
        cipher.init(Cipher.ENCRYPT_MODE, SECURE_KEY, new IvParameterSpec(IV.getBytes()));
        byte[] encrypted = cipher.doFinal(str.getBytes("UTF-8"));
        return Base64.getEncoder().encodeToString(encrypted);
    }

    public static String decrypt(String str) throws Exception {
        Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
        cipher.init(Cipher.DECRYPT_MODE, SECURE_KEY, new IvParameterSpec(IV.getBytes()));
        byte[] decrypted = cipher.doFinal(Base64.getDecoder().decode(str));
        return new String(decrypted, "UTF-8");
    }
}
