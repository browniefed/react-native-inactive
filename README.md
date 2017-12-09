```js
<View style={styles.container}>
  <Inactive style={styles.tapMe} delay={1000}>
    {inactive => {
      return <Text style={styles.text}>{inactive ? "We're inactive" : "Waiting..."}</Text>;
    }}
  </Inactive>
</View>
```