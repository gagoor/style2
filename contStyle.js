<script>
var blogId = '32228218679257252';
//The below message 5 Strings can also be edited
var contactFormMessageSendingMsg ='جاري الارسال...';
var contactFormMessageSentMsg = 'تم ارسال رسالتك بنجاح.';
var contactFormMessageNotSentMsg = 'تعذر إرسال الرسالة. الرجاء معاودة المحاولة في وقت لاحق.';
var contactFormEmptyMessageMsg ='صندوق الرسالة لا يمكن أن يكون فارغا.';
var contactFormInvalidEmailMsg = 'ادخل بريد إلكتروني صحيح.'

var widgetLoaded=false;
function sendEmailMsg() {
if(widgetLoaded== false) {
_WidgetManager._RegisterWidget('_ContactFormView', new _WidgetInfo('ContactForm1', 'sidebar', null, document.getElementById('ContactForm1'), {'contactFormMessageSendingMsg': contactFormMessageSendingMsg , 'contactFormMessageSentMsg': contactFormMessageSentMsg , 'contactFormMessageNotSentMsg': contactFormMessageNotSentMsg , 'contactFormInvalidEmailMsg': contactFormInvalidEmailMsg , 'contactFormEmptyMessageMsg': contactFormEmptyMessageMsg , 'title': 'Contact Form', 'blogId': blogId, 'contactFormNameMsg': 'Name', 'contactFormEmailMsg': 'Email', 'contactFormMessageMsg': 'Message', 'contactFormSendMsg': 'Send', 'submitUrl': 'https://www.blogger.com/contact-form.do'}, 'displayModeFull'));
widgetLoaded=true;
document.getElementById('ContactForm1_contact-form-submit').click();
}
return true;
}
</script>
