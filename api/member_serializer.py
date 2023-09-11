from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        #print(token)
        # Add custom claims
        token['username'] = user.username
        # ...
        
        print("token: ", token['username'])

        return token 