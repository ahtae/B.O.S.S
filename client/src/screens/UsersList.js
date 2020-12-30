import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, SafeAreaView } from 'react-native';
import { Title } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersFromServer } from '../redux/actions/users';
import Loading from '../components/Loading';
import User from '../components/User';
import styles from '../utils/styles';
import { removeErrors } from '../redux/actionCreators/error';

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const error = useSelector((state) => state.error);

  const getAllUsersHook = () => {
    dispatch(fetchUsersFromServer());

    if (error) {
      setTimeout(() => {
        dispatch(removeErrors());
      }, 5000);
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
          <Text style={styles.usersList.errorStyle}>{error}</Text>
          {output}
        </ScrollView>
      ) : (
        <Loading />
      )}
    </SafeAreaView>
  );
};

export default UsersList;
