function generateRandomUser(): User {
    const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomAge = Math.floor(Math.random() * 50) + 18; // 年龄随机范围为18-67岁

    return {
        id: parseInt(`${Math.random() * 10000000000}`).toString(),
        name: randomName,
        sex: Math.random() > 0.5 ? 'male' : 'female',
        age: randomAge,
    };
}

function generateUsers(count: number): User[] {
    let users: User[] = [];
    for (let i = 0; i < count; i++) {
        users.push(generateRandomUser());
    }
    return users;
}

// 生成10000条数据
const users = generateUsers(100);

export const api = {
    async getUsers(keyword: string): Promise<User[]> {
        return new Promise<User[]>((resolve, reject) => {
            // mock 请求延迟
            setTimeout(() => {
                return resolve(users.filter(user => user.name.includes(keyword)));
            }, 200);
        })
    }
}

export interface User {
    id: string;
    name: string;
    sex: 'male' | 'female';
    age: number;
}
