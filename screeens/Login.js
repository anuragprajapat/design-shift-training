import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

async function fetchUsers() {
  let res = fetch('http://dummy.restapiexample.com/api/v1/employees');
  let respJSON = await (await res).json();
  return respJSON;
}

function LoginScreen(props) {
  const [users, setUsers] = useState({data: []});

  useEffect(() => {
    fetchUsers().then(res => setUsers(res));
  }, []);

  console.log(users);

  return (
    <View>
      <Text>Hello Design Login!</Text>
      <Button
        title="Goto Home"
        onPress={() => {
          props.navigation.replace('Home');
        }}
      />
      {users.data.map(user => (
        <Text key={user.id}>{user.employee_name}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});

export default LoginScreen;
