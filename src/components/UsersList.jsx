import { useState } from 'react';
import { UsersContext } from '../lib/contetxs/UsersContext';
import UserListFilters from './UserListFilters';
import UsersListRows from './UserListRows';
import style from './UsersList.module.css';

const UsersList = ({ initialUsers }) => {
	const { search, onlyActive, sortBy, ...setFilertsFunctions } = useFilters();

	const { users, toggleUserActive } = useUsers(initialUsers);

	let usersFiltered = filterActiveUsers(users, onlyActive);
	usersFiltered = filterUsersByName(usersFiltered, search);
	usersFiltered = sortUsers(usersFiltered, sortBy);

	return (
		<div className={style.wrapper}>
			<h1>Listado de Dispositivos</h1>
			<UserListFilters
				search={search}
				onlyActive={onlyActive}
				sortBy={sortBy}
				{...setFilertsFunctions}
			/>
			<UsersContext.Provider value={{ toggleUserActive }}>
				<UsersListRows users={usersFiltered} />
			</UsersContext.Provider>
		</div>
	);
};

const useFilters = () => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sortBy: 0
	});

	const { search, onlyActive, sortBy } = filters;

	const setSearch = (search) =>
		setFilters({
			...filters,
			search
		});

	const setOnlyActive = (onlyActive) =>
		setFilters({
			...filters,
			onlyActive
		});

	const setSortBy = (sortBy) =>
		setFilters({
			...filters,
			sortBy
		});
	return {
		...filters,
		setSearch,
		setOnlyActive,
		setSortBy
	};
};

const useUsers = (initialUsers) => {
	const [users, setUsers] = useState(initialUsers);

	const toggleUserActive = (userId) => {
		const newUsers = [...users];

		const userIndex = newUsers.findIndex((user) => user.id === userId);
		if (userIndex === -1) return;

		newUsers[userIndex].active = !newUsers[userIndex].active;

		setUsers(newUsers);
	};

	return { users, toggleUserActive };
};

const filterUsersByName = (users, search) => {
	if (!search) return [...users];

	const lowerCaseSearch = search.toLowerCase();

	return users.filter((user) =>
		user.name.toLowerCase().startsWith(lowerCaseSearch)
	);
};

const filterActiveUsers = (users, active) => {
	if (!active) return [...users];

	return users.filter((user) => user.active);
};

const sortUsers = (users, sortBy) => {
	const sortedUsers = [...users];
	switch (sortBy) {
		case 1:
			return sortedUsers.sort((a, b) => {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
				return 0;
			});
		default:
			return sortedUsers;
	}
};

export default UsersList;
