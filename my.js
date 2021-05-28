function solution(orders, course) {
  const returnResult = [];

  // 중복을 제거한 메뉴들 모음
  const notDuplicate = orders.reduce((acc, cur) => {
    acc = acc.concat(cur.split(""));
    return [...new Set(acc)];
  }, [])
  
  const getArrByCount = (count) => {
    let result = [];
    
    const recursive = (count) => {
      result = [...new Set(result.map(el => {
        return el.split("")
      }))].map(el => {
        return el.join("");
      })

      if (count === 0) {
        return result;
      }
      
      if (!result.length) {
        result = notDuplicate.slice();
        count--;
        return recursive(count);
      }
      
      const newResult = [];
      
      for (const el of notDuplicate) {
        for (const el2 of result) {
          if (!el2.includes(el)) {
            const combine = el + el2;

            let boo = true;
            newResult.forEach(el3 => {
              if([...new Set(el3.split("").concat(combine.split("")))].length === el3.length) {
                boo = false;
              }
            })

            if (boo) {
              newResult.push(combine);
            }
          }
        }
      }
      result = newResult
      count--;
      
      return recursive(count);
    }

    recursive(count);
    return result;
  }

  const validate = (order, canItem) => {
    if ([...new Set(order.split("").concat(canItem.split("")))].length === order.length) return true;
    return false;
  }
  
  for (const courseOne of course) {
    const canAnyArray = getArrByCount(courseOne);

    let maxCount = 0;
    let maxItem = [];

    for (const canItem of canAnyArray) {
      let count = 0;
      for (const order of orders) {
        if (validate(order, canItem)) {
          count++
        }
      }

      if (count === maxCount) {
        maxItem.push(canItem);
      } else if (count > maxCount) {
        maxCount = count;
        maxItem = [canItem];
      }
    }
    if (maxCount >= 2) {
      returnResult.push(...maxItem);
    }
    maxCount = 0;
    maxItem = [];
  }
  return returnResult.map(el => {
    return el.split("").sort().join("");
  }).sort();
}

console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]));