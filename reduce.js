
// 获取数组对象的name，以对象的方式呈现
const allItems = [
    {
        name: 'item1',
        value: 111
    },
    {
        name: 'item2',
        value: 222
    },
    {
        name: 'item3',
        value: 333
    }
]
const getAllItemNames1 = (allItems) => {
    let names = allItems.reduce((ac, cur) => {
        ac[cur.name] = cur.name;
        return ac;
    }, {})
    return names;
}

getAllItemNames1(allItems); // { item1: 'item1', item2: 'item2', item3: 'item3' }

//扁平化数组
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArray.reduce((ac, cur) => ac.concat(cur), []);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

// 计算数组中每个元素出现的次数
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
getItemCount = (arr) => {
    let res = arr.reduce((ac, cur) => {
        ac[cur] = ac[cur] || 0;
        ac[cur]++;
        return ac;
    }, {})
    console.log(res);
    return res;
}

getItemCount(fruits); // { apple: 3, banana: 2, orange: 1 }

// 将字符串转化为对象
const str = 'key1=value1&key2=value2&key3=value3';
const transformStrToObj = (str) => {
    let res = str.split('&').reduce((ac, cur) => {
        let [key, val] = cur.split('=');
        ac[key] = val;
        return ac;
    }, {})
    console.log(res);
}
transformStrToObj(str); // { key1: 'value1', key2: 'value2', key3: 'value3' }

// 将对象转换为查询字符串
const params = { foo: "bar", baz: 42 };
const transformObjToStr = (params) => {
    let res =  Object.keys(params).reduce((ac, cur, curIndex) => {
        let seperator = curIndex === 0 ? '' : '&';
        ac+= `${seperator}${cur}=${params[cur]}`;
        return ac;
    }, '')
    console.log(res);
}

const transformObjToStr2 = (params) => {
    let res =  Object.entries(params).reduce((ac, [key, value], curIndex) => {
        let seperator = curIndex === 0 ? '' : '&';
        ac+= `${seperator}${key}=${value}`;
        return ac;
    }, '')
    console.log(res);
}
transformObjToStr(params);
transformObjToStr2(params);

// 递归获取对象的属性
const user = {
    info: {
      name: "Jason",
      address: { home: "Hubei", company: "广东" },
    },
  };
const getObjectValRecursive= (config, path, defaultVal) =>{
    let res =  path.split('.').reduce((ac, cur) => {
        return ac[cur];
    }, config) || defaultVal;
    console.log(res);
    return res;
}

getObjectValRecursive(user, 'info.address.home', '北京'); // Hubei

// 检查回文串
const moslemStr = 'racecar';
const isMoslems = (str) => {
    const arr = str.split('');
    const res =  arr.reduce((ac, cur, index) => {
        return cur === arr[arr.length - 1 - index];
    }, true);
    console.log(res);
    return res;
}
isMoslems(moslemStr); // true