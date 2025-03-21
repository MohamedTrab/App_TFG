import { 
  Body, 
  Controller, 
  HttpCode, 
  HttpStatus, 
  Post 
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import { Public } from 'src/common/decorators';
import { SendOtpDto, VerifyOtpDto } from './dto/otp.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  async signup(@Body() dto: SignupDto) {
    return await this.authService.signup(dto);
  }

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() dto: LoginDto) {
    return await this.authService.login(dto);
  }

  @Public()
  @Post('otp-send')
  @HttpCode(HttpStatus.OK)
  async otpSend(@Body() dto: SendOtpDto) {
    return await this.authService.otpSend(dto);
  }

  @Public()
  @Post('otp-verify')
  @HttpCode(HttpStatus.OK)
  async otpVerify(@Body() { email, code }: VerifyOtpDto) {
    return await this.authService.otpVerify(email, code);
  }

  // ✅ Ruta para recuperar contraseña
  @Public()
  @Post('forgot-password')
  @HttpCode(HttpStatus.OK)
  async forgotPassword(@Body('email') email: string) {
    return await this.authService.forgotPassword(email);
  }

  // ✅ Ruta para resetear contraseña con OTP
  @Public()
  @Post('reset-password')
  @HttpCode(HttpStatus.OK)
  async resetPassword(
    @Body('email') email: string,
    @Body('otp') otp: string,
    @Body('newPassword') newPassword: string
  ) {
    return await this.authService.resetPassword(email, otp, newPassword);
  }
}
