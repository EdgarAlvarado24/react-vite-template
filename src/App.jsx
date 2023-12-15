import UsersList from './components/UsersList';

const USERS = [
	{
		id: 0,
		name: 'Pablo Castellanos',
		active: true,
		role: 'teacher'
	},
	{
		id: 1,
		name: 'Jose Miguel Fernandez',
		active: true,
		role: 'teacher'
	},
	{
		id: 2,
		name: 'Javier Lopez',
		active: false,
		role: 'student'
	},
	{
		id: 3,
		name: 'Antonio Campos',
		active: true,
		role: 'teacher'
	}
];

const App = () => <UsersList initialUsers={USERS} />;

export default App;
