const express = require("express");
const path = require("path");
const app = express();
const port = 5000;
const hostname = '0.0.0.0';
var favicon = require('serve-favicon');
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use('/static', express.static('static'))
app.use("/public", express.static('public')); 
app.set('view engine', 'pug')

app.set('views', path.join(__dirname, 'views'))

app.get("/",(req,res)=>{
    res.status(200).render('home.pug')  
});
app.get("/contact",(req,res)=>{
    res.status(200).render('contact.pug')  
});
app.get("/team",(req,res)=>{
    res.status(200).render('team.pug')  
});
app.get("/instagram",(req,res)=>{
    res.status(200).render('instagram.pug')  
});
app.get("/facebook",(req,res)=>{
    res.status(200).render('facebook.pug')  
});
app.get("/whatsapp",(req,res)=>{
    res.status(200).render('whatsapp.pug')  
});
app.get("/snapchat",(req,res)=>{
    res.status(200).render('snapchat.pug')  
});
app.get("/tiktok",(req,res)=>{
    res.status(200).render('tiktok.pug')  
});
app.get("/other",(req,res)=>{
    res.status(200).render('other.pug')  
});
app.get("/insta_angry",(req,res)=>{
    res.status(200).render('insta_angry.pug')  
});
app.get("/fake_vacation",(req,res)=>{
    res.status(200).render('fake_vacation.pug')  
});
app.get("/met_a_celebrity",(req,res)=>{
    res.status(200).render('met_a_celebrity.pug')  
});
app.get("/comment_prank",(req,res)=>{
    res.status(200).render('comment_prank.pug')  
});
app.get("/confusion",(req,res)=>{
    res.status(200).render('confusion.pug')  
});
app.get("/filter_pranks",(req,res)=>{
    res.status(200).render('filter_pranks.pug')  
});
app.get("/post_similar",(req,res)=>{
    res.status(200).render('post_similar.pug')  
});
app.get("/important_announcement",(req,res)=>{
    res.status(200).render('important_announcement.pug')  
});
app.get("/crush",(req,res)=>{
    res.status(200).render('crush.pug')  
});
app.get("/fake_tattoo",(req,res)=>{
    res.status(200).render('fake_tattoo.pug')  
});
app.get("/waste_time",(req,res)=>{
    res.status(200).render('waste_time.pug')  
});
app.get("/annoy",(req,res)=>{
    res.status(200).render('annoy.pug')  
});
app.get("/pet",(req,res)=>{
    res.status(200).render('pet.pug')  
});

app.get("/fake_engagement",(req,res)=>{
    res.status(200).render('fake_engagement.pug')  
});
app.get("/fake_injury",(req,res)=>{
    res.status(200).render('fake_injury.pug')  
});
app.get("/show_off_diploma",(req,res)=>{
    res.status(200).render('show_off_diploma.pug')  
});
app.get("/fake_vacation_snapchat",(req,res)=>{
    res.status(200).render('fake_vacation_snapchat')  
});
app.get("/onesec_snapchat",(req,res)=>{
    res.status(200).render('onesec_snapchat.pug')  
});
app.get("/photo_video_snapchat",(req,res)=>{
    res.status(200).render('photo_video_snapchat.pug')  
});
app.get("/fake_engagement_snapchat",(req,res)=>{
    res.status(200).render('fake_engagement_snapchat.pug')  
});
app.get("/fake_birthday_snapchat",(req,res)=>{
    res.status(200).render('fake_birthday_snapchat.pug')  
});
app.get("/voice_broken_snapchat",(req,res)=>{
    res.status(200).render('voice_broken_snapchat.pug')  
});
app.get("/tap_snapchat",(req,res)=>{
    res.status(200).render('tap_snapchat.pug')  
});
app.get("/not_for_you_snapchat",(req,res)=>{
    res.status(200).render('not_for_you_snapchat.pug')  
});
app.get("/rickroll",(req,res)=>{
    res.status(200).render('rickroll.pug')  
});
app.get("/notifications_fb",(req,res)=>{
    res.status(200).render('notifications_fb.pug')  
});
app.get("/hidden_fb",(req,res)=>{
    res.status(200).render('hidden_fb.pug')  
});
app.get("/merry_fb",(req,res)=>{
    res.status(200).render('merry_fb.pug')  
});
app.get("/know_you_fb",(req,res)=>{
    res.status(200).render('know_you_fb.pug')  
});
app.get("/shalom_fb",(req,res)=>{
    res.status(200).render('shalom_fb.pug')  
});
app.get("/unguarded_profile_fb",(req,res)=>{
    res.status(200).render('unguarded_profile_fb.pug')  
});
app.get("/everywhere_fb",(req,res)=>{
    res.status(200).render('everywhere_fb.pug')  
});
app.get("/nobody_reads_anymore_fb",(req,res)=>{
    res.status(200).render('nobody_reads_anymore_fb.pug')  
});
app.get("/biggest_jerk_fb",(req,res)=>{
    res.status(200).render('biggest_jerk_fb.pug')  
});
app.get("/big_news_fb",(req,res)=>{
    res.status(200).render('big_news_fb.pug')  
});
app.listen(port, hostname, ()=>{
    console.log(`The app is running on http://localhost:${hostname}:${port}`)
})
