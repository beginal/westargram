const me = {
  nickname: 'page0blue',
  icon: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/50959409_809292579425612_573364557624377344_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=B9rbwtW2wU8AX-RyzAc&oh=a001eb7f445dd801f901f276a9fdde5e&oe=5F91AAAC'
}

const dummyData = {
  userFind: [
    {
      icon: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=lXGRUtCINKEAX8d_W6p&oh=7f5db01316278394021ccf8cf0d24650&oe=5F92BEA0',
      nickname: 'wecode_bootcamp',
      message: '>wecode | 위코드'
    },
    {
      icon: 'http://placehold.it/56x56?text=sample',
      nickname: 'wecode_founder',
      message: '송은우 (Eun Woo Song)'
    },
    {
      icon: 'http://placehold.it/56x56?text=sample',
      nickname: 'Wecode',
      message: '강남구 테헤란로 427, 서울'
    },
    {
      icon: 'http://placehold.it/56x56?text=sample',
      nickname: 'wecode_korea',
      message: ''
    },
    {
      icon: 'http://placehold.it/56x56?text=sample',
      nickname: 'narasarang',
      message: '국민'
    },
    {
      icon: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/50959409_809292579425612_573364557624377344_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=B9rbwtW2wU8AX-RyzAc&oh=a001eb7f445dd801f901f276a9fdde5e&oe=5F91AAAC',
      nickname: 'page0blue',
      message: '귀찮네'
    }
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
/// dummy 부분 ----

const _map = (f, iter) => { let res = []; for (const a of iter) { res.push(f(a)); } return res; }

const body = document.querySelector('body');

const postNickname = document.querySelectorAll('.user_name');
_map((v) => v.textContent = dummyPost.user.nickname, postNickname)

const profileImage = document.querySelectorAll('.my_profile_image');
_map((v) => v.setAttribute("src", dummyPost.user.icon), profileImage)

const getFriendImage = document.querySelectorAll('.get_friend_image');
_map((v) => v.setAttribute("src", 'https://image.bugsm.co.kr/artist/images/1000/800491/80049126.jpg'), getFriendImage)

const postImage = document.querySelector('.feed_image img');
postImage.setAttribute("src", dummyPost.images.src)

const PostMessage = document.querySelector('.feed_message');
PostMessage.textContent = dummyPost.contents;

const likeYouMessage = document.querySelector('.like_you_message');
likeYouMessage.innerHTML = `<span class="bold">null</span> 님 <span 
class="bold">외 ${dummyPost.liked}명</span>이 좋아합니다`;

const CreateComment = (v) => {
  const commentli = document.createElement('li')
  const commentprofile = document.createElement('div')
  commentli.appendChild(commentprofile)
  const commentbtns = document.createElement('div')
  commentli.appendChild(commentbtns).classList.add('btns')
  const atag = document.createElement('a')
  commentprofile.appendChild(atag).innerText = v.nickname
  const spantag = document.createElement('span')
  commentprofile.appendChild(spantag).innerText = v.contents
  const removeBtn = document.createElement('div')
  commentbtns.appendChild(removeBtn).classList.add('comment_remove_btn')
  removeBtn.innerText = '삭제'
  const heartToggleBtn = document.createElement('div')
  commentbtns.appendChild(heartToggleBtn).classList.add('heart_toggle')
  const heartImg = document.createElement('img')
  heartToggleBtn.appendChild(heartImg).setAttribute('src', 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png') 
  CommentsList.appendChild(commentli)
}

const CommentsList = document.querySelector('.comments_list ul');
dummyPost.comments.map((v) => {
  CreateComment(v)
})

const CommentsLength = document.querySelector('.comment_length');
CommentsLength.textContent = `댓글 ${CommentsList.children.length}개 모두 보기`

const CommentFormArea = document.querySelector('.comment_form textarea');
const CommentFormButton = document.querySelector('.comment_form button');
function submitComment() { // 댓글 전송
  if(CommentFormArea.value.length < 1) { 
    alert('댓글을 입력해라!')
    return;
   } 
     dummyPost.comments.push({
       nickname: me.nickname,
       contents: CommentFormArea.value,
       liked: false
      })
      CommentFormArea.value = ""
      CommentsList.innerHTML = ''
      dummyPost.comments.map((v) => {
        CreateComment(v)
      })
      CommentsLength.textContent = `댓글 ${CommentsList.children.length}개 모두 보기`
      CommentFormButton.setAttribute('disabled',null)
      removeComment()
    }

function keyPress() { // 댓글input value 갯수에 따른 전송버튼 비활성화
  CommentFormArea.value.length <= 0 
  ? CommentFormButton.setAttribute('disabled',null)
  : CommentFormButton.removeAttribute('disabled')
  event.keyCode === 13 && submitComment() // Enter로 댓글작성
}

const removeComment = () => { 
  const commentRemoveBtn = document.querySelectorAll('.comment_remove_btn');
  _map((v) => v.addEventListener('click', () => {
  CommentsList.removeChild(v.parentNode.parentNode)
  CommentsLength.textContent = `댓글 ${CommentsList.children.length}개 모두 보기`
})
,commentRemoveBtn)
}

removeComment()

const hreatToggleImg = document.querySelectorAll('.hreat_toggle img')
_map((v) => 
v.addEventListener('click', () => {
  v.setAttribute('src','https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png')
})
,hreatToggleImg)
const navSearch = document.querySelector('.nav_search');

navSearch.children[0].addEventListener('focus', () => {
  navSearch.classList.remove('search_change');
})
navSearch.children[0].addEventListener('blur', () => {
  navSearch.classList.add('search_change');
})
navSearch.children[0].addEventListener('keyup', () => {
  const searchListUl = document.querySelector('.search_list ul');
  const searchList = document.querySelector('.search_list');
  const navSearchInput = document.querySelector('.nav_search input');
  searchListUl.innerHTML = '';
  if(navSearchInput.value.length < 1) {
    searchList.style.display = 'none';
    return;
  }
  searchList.style.display = 'block';


  const userFindData = dummyData.userFind.filter((v) => {
    return v.nickname.includes(navSearchInput.value)
  }).map((v) => {
    const userFindLi = document.createElement('li');
    const userFindIcon = document.createElement('img');
    const userFindDiv = document.createElement('div');
    const userFindSpan = document.createElement('span');
    const userFindP = document.createElement('p');
    userFindLi.appendChild(userFindIcon).setAttribute('src',v.icon)
    userFindLi.appendChild(userFindDiv)
    userFindDiv.appendChild(userFindSpan).innerText = v.nickname
    userFindDiv.appendChild(userFindP).innerText = v.message
    userFindLi.classList.add('user_find_li')
    searchListUl.appendChild(userFindLi)
    console.log(dummyData.userFind.filter((v) => {
      return v.nickname.includes(navSearchInput.value)
    }).length)
  })
  if (userFindData.length === 0) {
    const userFindLi = document.createElement('li');
    const userFindDiv = document.createElement('div');
    const userFindSpan = document.createElement('span');
    userFindLi.appendChild(userFindDiv)
    userFindDiv.appendChild(userFindSpan).innerText = '검색 결과가 없습니다.'
    userFindDiv.style.textAlign = 'center';
    userFindDiv.style.color = 'gray';
    searchListUl.appendChild(userFindLi)
  }
})


const formProfile = document.querySelector('.form_profile');
body.addEventListener('click', (e) => {
  e.target.parentNode === document.querySelector('.click_form')
  ? formProfile.classList.toggle('hide')
  : formProfile.classList.add('hide')
});

const heartToggle = document.querySelectorAll('.heart_toggle');
_map((v) => v.addEventListener('click', () => {
  v.children[0].setAttribute('src','https://www.pinpng.com/pngs/m/8-85098_high-resolution-heart-instagram-like-icon-png-transparent.png')
}), heartToggle)
