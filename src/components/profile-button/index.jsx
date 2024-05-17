import React from "react";
import * as S from "./styles";

function ProfileButton() {
  return (
    <S.ProfileButton>
   
      <S.Content>
        <S.Text>User</S.Text>
        <S.Subtitle>Admin</S.Subtitle>
      </S.Content>
    </S.ProfileButton>
  );
}

export { ProfileButton };
