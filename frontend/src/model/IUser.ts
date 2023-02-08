export interface IUser {
	username: string
	password: string
	name: string
	surname: string
	age?: number
	image?: string
}

export let users: IUser[] = [
	{
		username: 'malinatrash',
		password: 'hehe',
		name: 'Pavel',
		surname: 'Naumov',
		image:
			'https://sun4-12.userapi.com/impg/whDcgSIZHS5ATfQ5E7gJ92wYCIZHLnUI_7Voqw/vlr2Ms5ivuM.jpg?size=1280x720&quality=95&sign=72d104c48aec1e1814034f9f72039655&type=album'
		// image: 'https://sun4-11.userapi.com/impg/esw9uOHvVMw8ObQv7gO9QDAc_vWWa-C7tpKuuA/1BPOoLMO2Ps.jpg?size=1280x720&quality=95&sign=678b5e62baa3577aee5eab1e4e53c5e8&type=album'
		// image: 'https://picsum.photos/200'
	}
]

export let currentUser: IUser

export const getCurrentUser = (user: IUser) => {
	currentUser = user
}