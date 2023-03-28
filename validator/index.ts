export * from './login';
export * from './config';

export async function delayAsync(time:number) {
    return new Promise((resolve:any) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}