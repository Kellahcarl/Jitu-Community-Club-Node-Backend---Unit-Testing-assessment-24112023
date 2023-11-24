CREATE OR ALTER  PROCEDURE [dbo].[registerUser]
	@club_id varchar(100),
	@user_name varchar(100),	
	@email varchar(250),
	@password varchar(250)
	
as

set nocount on;

begin
	INSERT INTO dbo.users
	(club_id, user_name, email, password )
	VALUES
	(@club_id,@user_name, @email, @password );
end;