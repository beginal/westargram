const me = {
  nickname: 'page0blue',
  icon: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/50959409_809292579425612_573364557624377344_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=B9rbwtW2wU8AX-RyzAc&oh=a001eb7f445dd801f901f276a9fdde5e&oe=5F91AAAC'
}

const dummyData = {
  userNames: [
    'wecode_bootcamp',
    'wecode_founder',
    'wecode_korea',
    'narasarang',
  ]
}

const dummyPost = {
  user: {
    nickname: 'page0blue',
    icon: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/50959409_809292579425612_573364557624377344_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=B9rbwtW2wU8AX-RyzAc&oh=a001eb7f445dd801f901f276a9fdde5e&oe=5F91AAAC'
  },
  postId: 0,
  images: {
    src: 'https://file.mk.co.kr/meet/neds/2020/04/image_readtop_2020_435990_15879677954178860.png'
  },
  contents: '날씨가 너무 좋아',
  comments: [
    {
      nickname: 'kwe1s',
      contents: '첫번째 댓글',
      liked: true,
    },
    {
      nickname: 'kwe2s',
      contents: '두번째 댓글',
      liked: false,
    }
  ],
  liked: 100,
}

const _map = (f, iter) => { let res = []; for (const a of iter) { res.push(f(a)); } return res; }
const body = document.querySelector('body');
const postNickname = document.querySelectorAll('.user_name');
const profileImage = document.querySelectorAll('.my_profile_image');
const getFriendImage = document.querySelectorAll('.get_friend_image');
const postImage = document.querySelector('.feed_image img');

const PostMessage = document.querySelector('.feed_message');
const likeYouMessage = document.querySelector('.like_you_message');

const CommentFormArea = document.querySelector('.comment_form textarea');
const CommentFormButton = document.querySelector('.comment_form button');

const CommentsList = document.querySelector('.comments_list ul');
const CommentsLength = document.querySelector('.comment_length');

const navSearch = document.querySelector('.nav_search');

const clickForm = document.querySelector('.click_form');
const formProfile = document.querySelector('.form_profile');

_map((v) => v.textContent = dummyPost.user.nickname, postNickname)
_map((v) => v.setAttribute("src", dummyPost.user.icon), profileImage)
_map((v) => v.setAttribute("src", 'https://image.bugsm.co.kr/artist/images/1000/800491/80049126.jpg'), getFriendImage)
postImage.setAttribute("src", dummyPost.images.src)

PostMessage.textContent = dummyPost.contents
likeYouMessage.innerHTML = `<span class="bold">null</span> 님 <span class="bold">외 ${dummyPost.liked}명</span>이 좋아합니다`

dummyPost.comments.map((v) => {
  CommentsList.innerHTML += `<li><div><a>${v.nickname}</a>  <span>${v.contents}</span></div> <div class="hreat_toggle"><img src=${!v.liked ? 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png' : 'https://www.pinpng.com/pngs/m/8-85098_high-resolution-heart-instagram-like-icon-png-transparent.png'}></img></div>  </li>`
})

CommentsLength.textContent = `댓글 ${dummyPost.comments.length}개 모두 보기`


function submitComment() {
  console.log('이벤트 발생')
  if(CommentFormArea.value.length <= 1) { 
    console.log('댓글을 입력해라!')
    return;
   } else {
     console.log(CommentFormArea.value.length)
     dummyPost.comments.push({
       nickname: me.nickname,
       contents: CommentFormArea.value,
       liked: false
      })
      CommentFormArea.value = ""
      CommentsList.innerHTML = ''
      dummyPost.comments.map((v) => {
        CommentsList.innerHTML += `<li><div><a>${v.nickname}</a>  <span>${v.contents}</span></div> <div class="hreat_toggle"><img src=${!v.liked ? 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png' : 'https://www.pinpng.com/pngs/m/8-85098_high-resolution-heart-instagram-like-icon-png-transparent.png'}></img></div>  </li>`
      })
      CommentsLength.textContent = `댓글 ${dummyPost.comments.length}개 모두 보기`
      CommentFormButton.setAttribute('disabled',null)
    }
    }

function keyPress() {
  if(CommentFormArea.value.length <= 0) {
    CommentFormButton.setAttribute('disabled',null)
  } else {
    CommentFormButton.removeAttribute('disabled')
  }
  if(event.keyCode === 13) {
   submitComment()
  }
}
navSearch.children[0].addEventListener('focus', function() {
  navSearch.classList.remove('search_change');
})
navSearch.children[0].addEventListener('blur', function() {
  navSearch.classList.add('search_change');
})
navSearch.children[0].addEventListener('keyup', function() {
  const navSearchInput = document.querySelector('.nav_search input');
  const searchList = document.querySelector('.search_list ul');
  searchList.innerHTML = '';
  if(navSearchInput.value.length <= 1) {
    searchList.innerHTML = '';
    return;
  }
  dummyData.userNames.map((v) => {
    if(v.includes(navSearchInput.value)) {
      searchList.innerHTML += `<li>${v}</li>`
    }
  })
  console.log(navSearchInput.value)
})

body.addEventListener('click', clickBodyEvent);

function clickBodyEvent(e) {
  let target = e.target;
  if(target.parentNode == clickForm) {
    formProfile.classList.toggle('hide');
    console.log('1')
  } else {
    formProfile.classList.add('hide');
    console.log('2')
}
}
const hreatToggle = document.querySelectorAll('.hreat_toggle');
_map((v) => v.addEventListener('click', function() {
  v.children[0].setAttribute('src','https://www.pinpng.com/pngs/m/8-85098_high-resolution-heart-instagram-like-icon-png-transparent.png')
}), hreatToggle)