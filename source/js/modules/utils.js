const showElement = (index, elements, className) => {
  elements.forEach((element) => element.classList.remove(className))
  elements[index].classList.add(className);
}

export {showElement};
