module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3c9a31ac22fa789247665f1a4bd35376'),
  },
});
