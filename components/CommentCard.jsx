import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { assets } from '../constants';

const CommentCard = ({ username, comment, logoUrl, timestamp }) => {
  // Calculate the time difference in hours
  const currentTime = new Date();
  const commentTime = new Date(timestamp);
  const timeDiff = Math.round((currentTime - commentTime) / (1000 * 60 * 60));

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={assets.person01} />
      <View style={styles.commentContainer}>
        <Text style={styles.username}>Mikecodes</Text>
        <Text style={styles.comment}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quidem, dicta accusantium corporis magnam mollitia aliquam repellat provident </Text>
        <Text style={styles.timestamp}>{`${10} hours ago`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  commentContainer: {
    flex: 1,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  comment: {
    fontSize: 14,
    lineHeight: 18,
  },
  timestamp: {
    fontSize: 12,
    color: '#888888',
  },
});

export default CommentCard;
