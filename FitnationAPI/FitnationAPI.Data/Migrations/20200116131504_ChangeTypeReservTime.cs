using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FitnationAPI.Data.Migrations
{
    public partial class ChangeTypeReservTime : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reservations_TimeRange_ReservationTimeId",
                table: "Reservations");

            migrationBuilder.DropIndex(
                name: "IX_Reservations_ReservationTimeId",
                table: "Reservations");

            migrationBuilder.DropColumn(
                name: "ReservationTimeId",
                table: "Reservations");

            migrationBuilder.AddColumn<Guid>(
                name: "ReservationTime",
                table: "Reservations",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ReservationTime",
                table: "Reservations");

            migrationBuilder.AddColumn<Guid>(
                name: "ReservationTimeId",
                table: "Reservations",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Reservations_ReservationTimeId",
                table: "Reservations",
                column: "ReservationTimeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Reservations_TimeRange_ReservationTimeId",
                table: "Reservations",
                column: "ReservationTimeId",
                principalTable: "TimeRange",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
