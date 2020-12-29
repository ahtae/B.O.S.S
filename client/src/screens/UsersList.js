import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, SafeAreaView } from 'react-native';
import { Title } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersFromServer } from '../store/users';
import Loading from '../components/Loading';
import User from '../components/User';
import styles from '../utils/styles';

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const [errorMessage, setErrorMessage] = useState('');

  const getAllUsersHook = () => {
    try {
      dispatch(fetchUsersFromServer());
    } catch (err) {
      setErrorMessage('Something went wrong!');
    }
  };

  useEffect(() => {
    getAllUsersHook();
  }, [users.length]);

  const output = users ? (
    <View>
      {users.map((user) => (
        <User key={user.id} currentUser={user} />
      ))}
    </View>
  ) : null;

  return (
    <SafeAreaView>
      {users ? (
        <ScrollView>
          <Title style={styles.usersList.titleStyle}>Users</Title>
          <Text style={styles.usersList.errorStyle}>{errorMessage}</Text>
          {output}
        </ScrollView>
      ) : (
        <Loading />
      )}
    </SafeAreaView>
  );
};

export default UsersList;
