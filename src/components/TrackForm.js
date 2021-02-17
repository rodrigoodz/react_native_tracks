import React, { useContext } from "react";
import { Button, Input } from "react-native-elements";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";
import Spacer from "./Spacer";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer />
      <Input placeholder="Enter Name" onChangeText={changeName} value={name} />
      {recording ? (
        <Spacer>
          <Button
            title="Stop"
            onPress={stopRecording}
            buttonStyle={{ backgroundColor: "red" }}
          />
        </Spacer>
      ) : (
        <Spacer>
          <Button title="Start Recording" onPress={startRecording} />
        </Spacer>
      )}
      {!recording && locations.length > 1 ? (
        <Spacer>
          <Button
            title="Save Track"
            buttonStyle={{ backgroundColor: "grey" }}
            onPress={saveTrack}
          />
        </Spacer>
      ) : null}
    </>
  );
};

export default TrackForm;
