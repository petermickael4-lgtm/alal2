document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault(); // يمنع الصفحة من عمل ريفريش

    // هنا تقدر تغير الإجابات الصحيحة بسهولة!
    // الحروف (a, b, c) تمثل قيمة الاختيار في الـ HTML
    const correctAnswers = {
        q1: 'b', // الإجابة الصحيحة للسؤال الأول
        q2: 'a', // الإجابة الصحيحة للسؤال الثاني
        q3: 'b'  // الإجابة الصحيحة للسؤال الثالث
    };

    // تجميع إجابات المستخدم
    const userAnswers = new FormData(this);
    const ans1 = userAnswers.get('q1');
    const ans2 = userAnswers.get('q2');
    const ans3 = userAnswers.get('q3');
    
    const resultBox = document.getElementById('quiz-result');

    // التأكد إن المستخدم جاوب على الـ 3 أسئلة
    if (!ans1 || !ans2 || !ans3) {
        resultBox.textContent = "يرجى الإجابة على جميع الأسئلة أولاً!";
        resultBox.className = "result-box error-msg";
        return;
    }

    // حساب النتيجة
    let score = 0;
    if (ans1 === correctAnswers.q1) score++;
    if (ans2 === correctAnswers.q2) score++;
    if (ans3 === correctAnswers.q3) score++;

    // إظهار النتيجة بناءً على طلبك
    if (score === 3) {
        resultBox.textContent = "برافو! 🎉";
        resultBox.className = "result-box success-msg";
    } else {
        resultBox.textContent = "لا حاول ثاني 😢";
        resultBox.className = "result-box error-msg";
    }
});
