


const qwe = JSON.parse('')
const a = [1, 2, 3] as const;
const arr = a.map(r => ({wow: r}))   
const inputWCls = document.querySelector('input.cls');  
localStorage.abc
const ob = {
    data: '1',
    some: '2',
}

const arr2 = ['data', 'some'] as const;

const qweqwe = arr2.reduce<Record<'data' | 'some', number>>((acc, cur) => {
    acc[cur] = 5;
    return acc;
}, {})