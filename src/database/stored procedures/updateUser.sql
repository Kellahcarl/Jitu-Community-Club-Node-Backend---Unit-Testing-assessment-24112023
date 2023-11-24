CREATE OR ALTER  PROCEDURE [dbo].[updateUser]
	@club_id varchar(100),
	@user_name varchar(100),
	@email varchar(250)
	as

set nocount on;

begin
	UPDATE dbo.users
	SET 
	user_name=@user_name,
	email=@email 	
	WHERE club_id = @club_id;
end;