'use strict';

let nn, score1, score2, score3, avgscore, grade;

nn = prompt('이름:');
score1 = prompt('국어 점수 :');
score2 = prompt('영어 점수 :');
score3 = prompt('수학 점수 :');
avgscore = (score1 + score2 + score3)/3

if (avgscore >= 90) {
    grade = "A";
} else if (avgscore >= 80) {
    grade = "B";
} else if (avgscore >= 70) {
    grade = "C";
} else {
    grade = "D";
}

alert(`<성적>
학생명 : ${nn}, 학점: ${grade}, 평균: ${avgscore}`);