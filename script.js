// 替换为你的 EmailJS 用户 ID
const emailjsUserID = '0z7siLdkNY5S-Uc9E'; // 从 EmailJS 获取

// 初始化 EmailJS
(function() {
    emailjs.init(publicKey: emailjsUserID);
})();

document.getElementById('supportForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 防止表单默认提交

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // 使用 EmailJS 发送邮件
    emailjs.send('service_ay6409m', 'template_w30u1od', {
        name: name,
        email: email,
        message: message
    })
    .then(function(response) {
        console.log('邮件发送成功:', response.status, response.text);
        document.getElementById('responseMessage').innerText = `感谢您的反馈, ${name}！我们会尽快联系您。`;
        document.getElementById('supportForm').reset(); // 清空表单
    }, function(error) {
        console.error('邮件发送失败:', error);
        document.getElementById('responseMessage').innerText = `发送失败，请稍后再试。`;
    });
});
