const sectionContainer = document.getElementById('section-container')
const navLabelContainer = document.getElementById('nav-btn-container')
const sectionsPost = Array.from(sectionContainer.children)
const navBtns = Array.from(navLabelContainer.children).map(label => label.children[0])

const urlParams = new URLSearchParams(window.location.search);
const param = urlParams.get('data');

let activeSectionPost = sectionsPost[0]
let activeBtn = navBtns[0]

if (param !== null) {
  activeSectionPost = sectionsPost.find(elm => elm.id === param)
  activeBtn = navBtns.find(elm => elm.dataset.sectionId === param)
  activeSectionPost.children[0].dataset.state = 'active'
  activeBtn.dataset.state = 'active'
} else {
  activeSectionPost.children[0].dataset.state = 'active'
  activeBtn.dataset.state = 'active'
}

navBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    activeSectionPost.children[0].dataset.state = 'inactive'
    activeBtn.dataset.state = 'inactive'

    activeSectionPost = sectionsPost.find(elm => elm.id === btn.dataset.sectionId);
    activeBtn = btn

    activeSectionPost.children[0].dataset.state = 'active'
    activeBtn.dataset.state = 'active'
  })
})

