var domain = 'https://2-dot-backup-server-003.appspot.com';
var link_register = '/_api/v2/members'
var linklogin = '/_api/v2/members/authentication'
document.addEventListener('DOMContentLoaded', function () {
    //khu vực code của thẻ tạo tài khoản
    var btnsubmit_register = document.querySelector('.submit_register');
    var checked = document.querySelectorAll('.register_gender');
    var txt_first_name = document.querySelector('.firstName_register');
    var txtLastName = document.querySelector('.lastName_register');
    var txtEmail = document.querySelector('.email_register');
    var url_avatar = document.querySelector('.avatar_register');
    var txtaddress = document.querySelector('.address_register');
    var telNumber = document.querySelector('.phoneNumber_register');
    var pwdpassword = document.querySelector('.password_register');
    var birth_day = document.querySelector('.birthDay_register');
    var btn_gotologin = document.querySelector('.go_to_login');
    var msgerror = document.querySelector('.msg_show');
    var modal_conten1=document.querySelector('.modal1');
    var modal_conten2=document.querySelector('.modal2');
    var modal_conten3=document.querySelector('.modal3');
    var modal_conten4=document.querySelector('.modal4');
    var modal_conten5=document.querySelector('.modal5');
    btn_gotologin.addEventListener('click', function () {
        modal_conten1.style.display='none'
        modal_conten2.style.display='block'
    });
    txt_first_name.onblur = function () {
        if (txt_first_name.value.length < 1) {
            msgerror.innerHTML = 'bạn vừa mới bỏ qua mục tên , đây là mục bắt buộc'
            msgerror.classList.add('msgerror_red');
            msgerror.classList.remove('msgsuccses_green');
        } else {
            msgerror.innerHTML = 'ok 200'
            msgerror.classList.remove('msgerror_red');
            msgerror.classList.add('msgsuccses_green');
        }
    }
    txtLastName.onblur = function () {
        if (txtLastName.value.length < 1) {
            msgerror.innerHTML = 'bạn vừa mới bỏ qua mục họ tên đây là mục bắt buộc'
            msgerror.classList.add('msgerror_red');
            msgerror.classList.remove('msgsuccses_green');
        } else {
            msgerror.innerHTML = 'ok 200'
            msgerror.classList.remove('msgerror_red');
            msgerror.classList.add('msgsuccses_green');
        }
    }
    txtEmail.onblur = function () {
        if (txtEmail.value.length < 1) {
            msgerror.innerHTML = 'ồ! bạn vừa mới bỏ qua mục email nhưng đây là mục bắt buộc'
            msgerror.classList.add('msgerror_red');
            msgerror.classList.remove('msgsuccses_green');
        } else if (txtEmail.value.length <= 7 && txtEmail.value.length >= 1) {
            msgerror.innerHTML = 'email quá ngắn'
            msgerror.classList.add('msgerror_red');
            msgerror.classList.remove('msgsuccses_green');
        } else {
            msgerror.innerHTML = 'ok 200'
            msgerror.classList.remove('msgerror_red');
            msgerror.classList.add('msgsuccses_green');
        }
    }
    url_avatar.onblur = function () {
        if (url_avatar.value.length < 1) {
            msgerror.innerHTML = 'avatar sẽ hiển thị trên profile của bạn nên bạn ko thể bỏ qua'
            msgerror.classList.add('msgerror_red');
            msgerror.classList.remove('msgsuccses_green');
        } else if (url_avatar.value.length <= 9 && url_avatar.value.length >= 1) {
            msgerror.innerHTML = 'url avatar không đúng định dạng'
            msgerror.classList.add('msgerror_red');
            msgerror.classList.remove('msgsuccses_green');
        } else {
            msgerror.innerHTML = 'ok 200'
            msgerror.classList.remove('msgerror_red');
            msgerror.classList.add('msgsuccses_green');
        }
    }
    txtaddress.onblur = function () {
        if (txtaddress.value.length < 1) {
            msgerror.innerHTML = 'địa chỉ là mục bắt buộc nên bạn không thể bỏ qua'
            msgerror.classList.add('msgerror_red');
            msgerror.classList.remove('msgsuccses_green');
        } else if (txtaddress.value.length >= 5) {
            msgerror.innerHTML = 'ok 200'
            msgerror.classList.remove('msgerror_red');
            msgerror.classList.add('msgsuccses_green');
        } else {
            msgerror.innerHTML = 'vui lòng cho địa chỉ chi tiết hơn ';
            msgerror.classList.add('msgerror_red');
            msgerror.classList.remove('msgsuccses_green');
        }
    }
    telNumber.onblur = function () {
        if (telNumber.value.length < 1) {
            msgerror.innerHTML = 'số điện thoại là mục bắt buộc và ko đc bỏ qua'
            msgerror.classList.add('msgerror_red');
            msgerror.classList.remove('msgsuccses_green');
        } else if (telNumber.value.length >= 9 && telNumber.value.length <= 20) {
            msgerror.innerHTML = 'ok 200'
            msgerror.classList.remove('msgerror_red');
            msgerror.classList.add('msgsuccses_green');
        } else {
            msgerror.innerHTML = 'số điện thoại sai định dạng';
            msgerror.classList.add('msgerror_red');
            msgerror.classList.remove('msgsuccses_green');
        }
    }
    pwdpassword.onblur = function () {
        if (pwdpassword.value.length < 1) {
            msgerror.innerHTML = 'hãy điền mật khẩu để làm chìa khóa đăng nhập cho bạn'
            msgerror.classList.add('msgerror_red');
            msgerror.classList.remove('msgsuccses_green');
        } else if (pwdpassword.value.length >= 1 && pwdpassword.value.length < 4) {
            msgerror.innerHTML = 'mật khẩu yếu !!!'
            msgerror.classList.add('msgerror_red');
            msgerror.classList.remove('msgsuccses_green');
        } else if (pwdpassword.value.length >= 4 && pwdpassword.value.length <= 8) {
            msgerror.innerHTML = 'mật khẩu ok '
            msgerror.classList.remove('msgerror_red');
            msgerror.classList.add('msgsuccses_green');
        } else {
            msgerror.innerHTML = 'mật khẩu rất ok'
            msgerror.classList.remove('msgerror_red');
            msgerror.classList.add('msgsuccses_green');
        }
    }
    txt_first_name.onkeyup = function () {
        msgerror.innerHTML = null;
        msgerror.classList.remove('msgerror_red');
    }
    txtLastName.onkeyup = function () {
        msgerror.innerHTML = null;
        msgerror.classList.remove('msgerror_red');
    }
    txtEmail.onkeyup = function () {
        msgerror.innerHTML = null;
        msgerror.classList.remove('msgerror_red');
    }
    url_avatar.onkeyup = function () {
        msgerror.innerHTML = null;
        msgerror.classList.remove('msgerror_red');
    }
    txtaddress.onkeyup = function () {
        msgerror.innerHTML = null;
        msgerror.classList.remove('msgerror_red');
    }
    telNumber.onkeyup = function () {
        msgerror.innerHTML = null;
        msgerror.classList.remove('msgerror_red');
    }
    pwdpassword.onkeyup = function () {
        if (pwdpassword.value.length < 1) {
            msgerror.innerHTML = ''
            msgerror.classList.remove('msgerror_red');
            msgerror.classList.add('msgsuccses_green');
        } else if (pwdpassword.value.length >= 1 && pwdpassword.value.length < 4) {
            msgerror.innerHTML = 'mật khẩu yếu !!!'
            msgerror.classList.add('msgerror_red');
            msgerror.classList.remove('msgsuccses_green');
        } else if (pwdpassword.value.length >= 4 && pwdpassword.value.length <= 8) {
            msgerror.innerHTML = 'độ dài mật khẩu ok'
            msgerror.classList.remove('msgerror_red');
            msgerror.classList.add('msgsuccses_green');
        } else {
            msgerror.innerHTML = 'độ dài mật khẩu rất ok (200)'
            msgerror.classList.remove('msgerror_red');
            msgerror.classList.add('msgsuccses_green');
        }
    }
    btnsubmit_register.addEventListener('click', function () {
        for (var i = 0; i < checked.length; i++) {
            if (checked[i].checked) {
                var a = checked[i].value;
            }
        }
        var form_registerObj = {
            'firstName': `${txt_first_name.value}`,
            'lastName': `${txtLastName.value}`,
            'password': `${pwdpassword.value}`,
            'address': `${txtaddress.value}`,
            'phone': `${telNumber.value}`,
            'avatar': `${url_avatar.value}`,
            'gender': Number(a),
            'email': `${txtEmail.value}`,
            'birthday': `${birth_day.value}`,
        }
        if (form_registerObj.firstName.length >= 1 && form_registerObj.lastName.length >= 1 && form_registerObj.password.length >= 1 && form_registerObj.address.length > 4 && form_registerObj.phone.length >= 9 && form_registerObj.avatar.length > 7 && form_registerObj.gender>0 && form_registerObj.email.length >= 8 && form_registerObj.birthday !== '') {
            var form_registerObjJson = JSON.stringify(form_registerObj);
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 201) {
                        alert('đăng kí thành công đi tới đăng nhập');
                        var form_registerJsonObj = JSON.parse(this.responseText);
                        console.log(form_registerJsonObj);
                        modal_conten1.style.display='none'
                        modal_conten2.style.display='block'
                    } else {
                        alert('đăng kí thất bại email này có thể đã đc sử dụng hoặc đang sai định dạng')
                        console.log(this.status)
                    }
                }
            }
            xhr.open('POST', domain + link_register);
            xhr.setRequestHeader('Content-type', 'application/json')
            xhr.send(form_registerObjJson);
        } else {
            alert("bạn đã bỏ trống hoặc điền thiếu thông tin trong form đăng kí của chúng tôi vui lòng điền đầy đủ thông tin theo yêu cầu")
        }
    });
    //khu vực code của thẻ đăng nhập
    var txtemail_login = document.querySelector('.login_email');
    var pwdpassword_login = document.querySelector('.login_password');
    var btnSubmit_login = document.querySelector('.submit_login');
    var btngoto_register = document.querySelector('.goto_register');
    var msg_login = document.querySelector('.msg_login');

    txtemail_login.onkeyup=function (){
        msg_login.innerHTML='';
    };
    pwdpassword_login.onkeyup=function (){
        msg_login.innerHTML='';
    };

    btngoto_register.addEventListener('click', function () {
        modal_conten1.style.display='block'
        modal_conten2.style.display='none'
    });
    btnSubmit_login.addEventListener('click', function () {
        var form_loginObj = {
            'password': `${pwdpassword_login.value}`,
            'email': `${txtemail_login.value}`,
        }
        if (form_loginObj.password.length >= 1 && form_loginObj.email.length >= 1) {
            msg_login.innerHTML = '';
            msg_login.classList.remove('msgerror_red');
            msg_login.classList.add('msgsuccses_green');
            var form_loginObjJson = JSON.stringify(form_loginObj);
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 201) {
                        var form_loginJsonObj = JSON.parse(this.responseText);
                        localStorage.setItem('wed_song_token', form_loginJsonObj.token);
                        localStorage.getItem('wed_song_token')
                        console.log(form_loginJsonObj.token);
                        modal_conten2.style.display='none'
                        conten_div_newSOng.style.display = 'block'
                        load_contents();
                    }else if (this.status==400){
                        msg_login.innerHTML = 'không tìm thấy thông tin người dùng nếu chưa có tài khoản hãy đăng kí';
                        msg_login.classList.remove('msgerror_red');
                        msg_login.classList.add('msgsuccses_green');
                    }
                    else {
                        msg_login.innerHTML = 'hiện tại đang gặp lỗi';
                        msg_login.classList.add('msgerror_red');
                        msg_login.classList.remove('msgsuccses_green');
                    }
                }
            }
            xhr.open('POST', domain + linklogin);
            xhr.setRequestHeader('Content-type', 'application/json')
            xhr.send(form_loginObjJson);
        } else {
            msg_login.classList.add('msgerror_red');
            msg_login.classList.remove('msgsuccses_green');
            msg_login.innerHTML = 'vui lòng điền đầy đủ thông tin để đăng nhập';
        }
    });
//khu vực code get new song {phần này căng thẳng quá từ 4h chiều đến 8h tối ngồi tìm lỗi chỉ vì chữ basic ko viết hoa}
    var btn_logout = document.querySelector('.logout');
    btn_logout.addEventListener('click', function () {
        localStorage.removeItem('wed_song_token');
        document.querySelector('.conten_new_song').innerHTML = '';
        modal_conten2.style.display='block'
        conten_div_newSOng.style.display = 'none';
    });
    var conten_div_newSOng = document.querySelector('.new_song');
    function load_contents() {
        var token = localStorage.getItem('wed_song_token')
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    var contenloadJson = JSON.parse(this.responseText);
                    for (var i = 0; i <= contenloadJson.length; i++) {
                            var element = contenloadJson[i];
                        if (i===102){
                            document.querySelector('.load_ding').style.display='none';
                            break;
                        }
                            document.querySelector('.conten_new_song').innerHTML += `<div slot="${element.thumbnail}" title="bài hát : ${element.name} - được thể hiện bởi ca sỹ : ${element.singer} - được sáng tác bới : ${element.author}" id="${element.link}" class="on_audio_play"><img src="${element.thumbnail}" alt=""><br><p>singer:${element.singer}</p><br><p>song name:${element.name}</p><br><p></p> </div>`
                        var btnplay_audio = document.querySelectorAll('.on_audio_play');
                        for (var a = 0;a<btnplay_audio.length;a++){
                            btnplay_audio[a].onclick=function (){
                                document.querySelector('.audio_play_container').style.display='block'
                                document.querySelector('.audio_play_container').innerHTML=`<span class="close_play_song">&times;</span><img src="${this.slot}" class="rotating"><div class="ads"><marquee><p class="top_run">${this.title}</p></marquee></div><audio class="audio_play" controls autoplay> <source src="${this.id}" type="audio/mpeg"></audio>`;
                                console.log(this.id)
                                document.querySelector('.close_play_song').onclick=function (){
                                    document.querySelector('.audio_play_container').style.display='none'
                                    document.querySelector('.audio_play_container').innerHTML='';
                                }
                            }
                        }
                    }
                } else {
                    alert('không tìm thấy nội dung nào')
                }
            }
        }
        xhr.open('GET', domain + '/_api/v2/songs');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader(`Authorization`, `Basic ${token}`);
        xhr.send();
    }
//khu vực code upload song    <source class="audio_play_src"  type="audio/mpeg">
    var name_addSong = document.querySelector('.add_song_name');
    var author_addSong = document.querySelector('.add_song_author');
    var description_addSong = document.querySelector('.add_song_description');
    var singer_addSong = document.querySelector('.add_song_singer');
    var link_addSong = document.querySelector('.add_song_link');
    var thumbnail_addSong = document.querySelector('.add_song_thumbnail');
    var message_addSong = document.querySelector('.message_addSong');
    var btnsubmit = document.querySelector('.btnSubmit');
    var btnclose_add_song = document.querySelector('.close_add_song');
    var btnupload = document.querySelector('.upload');
    var btnbtndelete = document.querySelector('.btndelete');
    btnbtndelete.addEventListener('click', function () {
        name_addSong.value = '';
        author_addSong.value = '';
        description_addSong.value = '';
        singer_addSong.value = '';
        link_addSong.value = '';
        thumbnail_addSong.value = '';
        message_addSong.value = '';
    });
    btnupload.addEventListener('click', function () {
        modal_conten3.style.display='block'
    })
    btnclose_add_song.addEventListener('click', function () {
        modal_conten3.style.display='none'
    });
    btnsubmit.addEventListener('click', function () {
        if (name_addSong.value.length>=1&&author_addSong.value.length>=1&&description_addSong.value.length>=1&&singer_addSong.value.length>=1&&link_addSong.value.length>=1&&thumbnail_addSong.value.length>=1&&message_addSong.value.length>=1){
            var objAddSong = {
                'name': `${name_addSong.value}`,
                'singer': `${singer_addSong.value}`,
                'description': `${description_addSong.value}`,
                'author': `${author_addSong.value}`,
                'thumbnail': `${thumbnail_addSong.value}`,
                'link': `${link_addSong.value}`,
                'message': `${message_addSong.value}`
            }
            var token = localStorage.getItem('wed_song_token')
            var obj_json_addSong = JSON.stringify(objAddSong);
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 201) {
                        alert('tải bài hát lên thành công');
                        var addSong_JsonObj = JSON.parse(this.responseText);
                        console.log(addSong_JsonObj)
                        name_addSong.value = '';
                        author_addSong.value = '';
                        description_addSong.value = '';
                        singer_addSong.value = '';
                        link_addSong.value = '';
                        thumbnail_addSong.value = '';
                        message_addSong.value = '';
                        load_contents();
                    } else {
                        alert('tải bài hát lên thất bại')
                    }
                }
            }
            xhr.open('post', domain + '/_api/v2/songs');
            xhr.setRequestHeader(`Authorization`, `Basic ${token}`);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(obj_json_addSong);
        }else {
            alert('bạn đã bỏ trống mục nào đó vui lòng điền đầy đủ và kiểm tra thông tin trước khi gửi đi')
        }
    });
    document.querySelector('.close_mysong').onclick = function (){
        modal_conten5.style.display='none'
        document.querySelector('.get_mySong').innerHTML='';
    }
    //khu vực code hiển thị my song
    var get_my_song = document.querySelector('.load_my_song');
    get_my_song.addEventListener('click',function (){
        modal_conten5.style.display='block'
        var token = localStorage.getItem('wed_song_token')
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                  var contenloadJson=JSON.parse(this.responseText);
                  for (var i = 0 ;i<contenloadJson.length;i++){
                      var element = contenloadJson[i];
                      document.querySelector('.get_mySong').innerHTML+=`<div slot="${element.thumbnail}" title="bài hát : ${element.name} được thể hiện bởi ca sỹ : ${element.singer} được sáng tác bới : ${element.author}" class="on_audio_play_mySong" id="${element.link}"><img class="on_audio_play_mySong_img" src="${element.thumbnail}" alt=""><br><p>singer:${element.singer}</p><br><p>song name:${element.name}</p></div>`

                      var btnplay_audio = document.querySelectorAll('.on_audio_play_mySong');
                      for (var a = 0;a<btnplay_audio.length;a++){
                          btnplay_audio[a].onclick=function (){
                              document.querySelector('.audio_play_container').style.display='block'
                              modal_conten5.style.display='none'
                              document.querySelector('.audio_play_container').innerHTML=`<span class="close_play_song">&times;</span><img src="${this.slot}" class="rotating"><div class="ads"><marquee><p class="top_run">${this.title}</p></marquee></div><audio class="audio_play" controls autoplay> <source src="${this.id}" type="audio/mpeg"></audio>`;
                              console.log(this.id)
                              document.querySelector('.close_play_song').onclick=function (){
                                  document.querySelector('.audio_play_container').style.display='none'
                                  modal_conten5.style.display='block'
                                  document.querySelector('.audio_play_container').innerHTML='';
                              }
                          }
                      }
                  }
                } else {
                    alert('tải danh sách bài hát thất bại vui lòng kiểm tra kết nối');
                    console.log(this.status)
                }
            }
        }
        xhr.open('post', domain + '/_api/v2/songs/get-mine');
        xhr.setRequestHeader(`Authorization`, `Basic ${token}`);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send();
    });
//khu vực code hiển thị my info
    var myinfo = document.querySelector('.my_info');
    var btnclose_info = document.querySelector('.close_profile1');
    btnclose_info.onclick = function () {
        modal_conten4.style.display='none'
    }
    var display_info_user = document.querySelector('.display_info_user');
    display_info_user.addEventListener('click', function () {
        var token = localStorage.getItem('wed_song_token');
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 201) {
                    var element = JSON.parse(this.responseText);
                    myinfo.innerHTML = `<img src="${element.avatar}"><br><h1>${element.lastName} ${element.firstName}</h1><br><p>sdt: ${element.phone}</p><br><p>email: ${element.email}</p><br><p>address: ${element.address}</p><br><p>id:${element.id}</p><br><p>birthday: ${element.birthday}</p><br> `
                    console.log(element);
                    modal_conten4.style.display='block'
                } else {
                    alert('lấy thông tin người dùng thất bại');
                    console.log(this.status);
                }
            }
        }
        xhr.open("GET", domain + '/_api/v2/members/information');
        xhr.setRequestHeader(`Authorization`, `Basic ${token}`)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send();
    });
});
var btn_menu_nav_bar = document.querySelector('.nav_bar_menu');
btn_menu_nav_bar.addEventListener('click',function (){
   document.querySelector('.menu').style.display='block';
   document.querySelector('.conten_new_song').style.display='none';
   document.querySelector('.close_menu').style.display='block';
});
var btnclose_menu = document.querySelector('.close_menu');
btnclose_menu.addEventListener('click',function (){
    document.querySelector('.menu').style.display='none';
    document.querySelector('.conten_new_song').style.display='block';
    document.querySelector('.close_menu').style.display='none';
});