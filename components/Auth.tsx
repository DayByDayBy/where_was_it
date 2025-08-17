import React from 'react';
import { Button, View } from 'react-native';
import { supabase } from '../lib/supabase';

export default function Auth() {
  async function signInWithGoogle() {
    // Not implemented
  }

  return (
    <View>
      <Button title="Sign in with Google" onPress={signInWithGoogle} />
    </View>
  );
}
