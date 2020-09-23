const me = {
  nickname: 'page0blue',
  icon: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/50959409_809292579425612_573364557624377344_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=B9rbwtW2wU8AX-RyzAc&oh=a001eb7f445dd801f901f276a9fdde5e&oe=5F91AAAC'
}

const dummyUser = {
  users: [
    {
      icon: 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=lXGRUtCINKEAX8d_W6p&oh=7f5db01316278394021ccf8cf0d24650&oe=5F92BEA0',
      nickname: 'weboot',
      message: '>wecode | 위코드'
    },
    {
      icon: 'http://placehold.it/56x56?text=sample',
      nickname: 'wefounder',
      message: '송은우 (Eun Woo Song)'
    },
    {
      icon: 'http://placehold.it/56x56?text=sample',
      nickname: 'Wecode',
      message: '강남구 테헤란로 427, 서울'
    },
    {
      icon: 'http://placehold.it/56x56?text=sample',
      nickname: 'wekorea',
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
    },
    {
      icon: 'https://ww.namu.la/s/aeca2e14dbb78281beabffe6d5a8b1a84233da4aa2d7b857f11baa8530908b4faf2dae5ce55389c73821b2235cfa3c4d9744bb30d3edc6efda4a446164481c7883a1601fe728564b751b30bb4e7b5fec0c9b9560abda620ddf868d89baf37357aee9213d8393be29d72c5d821151ba8b',
      nickname: 'EasyGold',
      message: '이지금'
    },
    {
      icon: 'https://ww.namu.la/s/4e68d2da7f9dc6ec1251daa195275de1a481dbef92a1f00a627dc5f7bdc1aeb8dcfb3dee162cb279e0b28e785e141a99af2559dad5cebfcaa63bad4013cf6edc21d55d1cad4d4fac317161f8f1801c916355ce3711c1a9e4121d7dfc49034ecae954781309df50a86f607b41316f8e26',
      nickname: 'moonLight',
      message: '문별'
    },
    {
      icon: 'https://w.namu.la/s/b99033a5fa0125d8bed88db1287d8d6e44ecbaa56f51941c0adc6a9dc5179e6651aeee3e3c7f95bc50d9eb4ac432b731f8bdf6bf941c87d1133b9586e5af736ba7aa52c31a153184c1850b642ae9a52548d876c9ece5e433187a6abfb954741b34400921306aa3f85b9657054c813377',
      nickname: 'jiminstart',
      message: '정정'
    },
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

const storyList =  document.querySelector('.story_list');
dummyUser.users.map((v) => {
  const storyLi = document.createElement('li')
  const storyImg = document.createElement('img')
  const storySpan = document.createElement('span')
  storyLi.appendChild(storyImg).setAttribute('src',v.icon)
  storyLi.appendChild(storySpan).innerText = v.nickname
  storyList.appendChild(storyLi).classList.add('friend_story')
})



// ---- Comments ---- //

const keyPress = () => { // 댓글input value 갯수에 따른 전송버튼 비활성화
  CommentFormArea.value.length <= 0
    ? CommentFormButton.setAttribute('disabled', null)
    : CommentFormButton.removeAttribute('disabled')
  event.keyCode === 13 && submitComment() // Enter로 댓글작성
}




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
  const whiteHeartImage = document.createElement('img')
  whiteHeartImage.classList.add('whiteHeart')
  whiteHeartImage.setAttribute('src','https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png')
  heartToggleBtn.appendChild(whiteHeartImage)
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
  if (CommentFormArea.value.length < 1) {
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
  CommentFormButton.setAttribute('disabled', null)
  removeComment()
}

const removeComment = () => {
  const commentRemoveBtn = document.querySelectorAll('.comment_remove_btn');
  _map((v) => v.addEventListener('click', () => {
    CommentsList.removeChild(v.parentNode.parentNode)
    CommentsLength.textContent = `댓글 ${CommentsList.children.length}개 모두 보기`
  })
    , commentRemoveBtn)
}

removeComment()

const heartBtn = document.querySelectorAll('.heart_toggle');
const heartBtnRed = document.querySelectorAll('.heart_toggle redHeart');
const heartBtnWhite = document.querySelectorAll('.heart_toggle whiteHeart');
_map((v) => v.addEventListener('click', function() {
  const redHeartImage = document.createElement('img')
  redHeartImage.classList.add('redHeart')
  redHeartImage.setAttribute('src','https://www.pngfind.com/pngs/m/101-1010488_instagram-heart-png-love-heart-transparent-png.png')
  const whiteHeartImage = document.createElement('img')
  whiteHeartImage.classList.add('whiteHeart')
  whiteHeartImage.setAttribute('src','https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png')
  console.log(this.children[0].classList.value)
  if(this.children[0].classList.value === 'whiteHeart') {
    v.replaceChild(redHeartImage,this.children[0])
  } else {
    v.replaceChild(whiteHeartImage,this.children[0])

  }
}),heartBtn)

// ---- Comments End ---- //

// ---- SearchBarToggle ---- //

const SearchBarToggle = document.querySelector('.nav_search');

SearchBarToggle.children[0].addEventListener('focus', () => {
  SearchBarToggle.classList.remove('search_change');
})
SearchBarToggle.children[0].addEventListener('blur', () => {
  SearchBarToggle.classList.add('search_change');
})
SearchBarToggle.children[0].addEventListener('keyup', () => {
  const searchListUl = document.querySelector('.search_list ul');
  const searchList = document.querySelector('.search_list');
  const navSearchInput = document.querySelector('.nav_search input');
  searchListUl.innerHTML = '';
  if (navSearchInput.value.length < 1) {
    searchList.style.display = 'none';
    return;
  }
  searchList.style.display = 'block';

  // ---- SearchBarToggle End ---- //

  // ---- SearchBarFindUser ---- //

  const SearchBarFindUser = dummyUser.users.filter((v) => {
    return v.nickname.includes(navSearchInput.value)
  }).map((v) => {
    const userFindLi = document.createElement('li');
    const userFindIcon = document.createElement('img');
    const userFindDiv = document.createElement('div');
    const userFindSpan = document.createElement('span');
    const userFindP = document.createElement('p');
    userFindLi.appendChild(userFindIcon).setAttribute('src', v.icon)
    userFindLi.appendChild(userFindDiv)
    userFindDiv.appendChild(userFindSpan).innerText = v.nickname
    userFindDiv.appendChild(userFindP).innerText = v.message
    userFindLi.classList.add('user_find_li')
    searchListUl.appendChild(userFindLi)
    console.log(dummyUser.users.filter((v) => {
      return v.nickname.includes(navSearchInput.value)
    }).length)
  })
  if (SearchBarFindUser.length === 0) {
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

// ---- SearchBarFindUser End ---- //

// ---- Profile Click Toggle ---- //

const formProfile = document.querySelector('.form_profile');
body.addEventListener('click', (e) => {
  e.target.parentNode === document.querySelector('.click_form')
    ? formProfile.classList.toggle('hide')
    : formProfile.classList.add('hide')
});

// ---- Profile Click Toggle End ---- //
