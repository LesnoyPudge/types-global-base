


const qwe = JSON.parse('')
const a = [1, 2, 3] as const;
const arr = a.map(r => ({wow: r}))   

// @ts-expect-error
const inputWCls = document.querySelector('input.cls');  
// @ts-expect-error
localStorage.abc
// @ts-expect-error
const el = document.createElement('div').cloneNode();
// @ts-expect-error
console.log('')

const as = Object.assign({}, {a: 1}, {b: 2})
//    ^?
const t = Object.assign({ a: 7, b: 8 }, { b: '' }) 
//    ^?

const ob = {
    data: '1',
    some: '2',
}

const arr2 = ['data', 'some'] as const;
arr2.includes(5)
const qweqwe = arr2.reduce<Record<'data' | 'some', number>>((acc, cur) => {
    acc[cur] = 5;
    return acc;
}, {})
const qwe2 = [1, undefined].filter(Boolean)

const avc = {
    b: 1,
    c: 'data',
    4: 'num'
} as const

const keys = Object.keys<typeof avc>(avc)
//     ^?

const keys2 = Object.keys(avc)
//     ^?